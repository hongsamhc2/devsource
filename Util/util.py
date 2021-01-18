import time
from multiprocessing import Pool


class progress:
    def __init__(self):
        self.step = 1

    def bar(self, data, step):
        _iter = len(data)
        per = round((step / _iter * 100), 1)
        doing = int(step / _iter * 20)
        bar = "▒" * doing + "-" * (20 - doing)
        print(f'\r[{bar}] | [{per}%  :  {step}/{_iter}]', end='')
        if step == _iter:
            print()

    def time(self, func, data):
        start = time.time()
        result = func(data)
        end = time.time() - start
        print(f'{func.__name__} execution time {self.calTime(end)}')
        return result

    def calTime(self,T):
        T = int(T)
        M = T//60
        S = T%60
        H = M//60
        M = M%60
        return f'{str(H).zfill(2)}:{str(M).zfill(2)}:{str(S).zfill(2)}'

    def listMapPool(self, func, data, process_num=4):
        start = time.time()
        pool = Pool(process_num)
        result = pool.map(func, data)
        pool.close()
        pool.join()
        end = time.time() - start
        print(f'{func.__name__} execution time {end}ms')
        print()
        return result
