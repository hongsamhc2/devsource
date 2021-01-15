from multiprocessing import Pool
import pickle

def wrapper(func,li):
    pool = Pool(3)
    k = pool.map(func, li)
    pool.close()
    pool.join()
    print(k)
    return k
def rtrt(x):
    x = x.split(' ')
    return x

if __name__ == "__main__":
    li = [str(x) for x in range(270000)]
    li =wrapper(rtrt,li)

