import os
import time
import pandas as pd
from multiprocessing import Pool


class progress:
    def __init__(self):
        self.step = 1

    def bar(self, data, step):
        _iter = len(data)-1
        per = round((step / _iter * 100), 1)
        doing = int(step / _iter * 20)
        bar = "▒" * doing + "-" * (20 - doing)
        print(f'\r[{bar}] | [{per}%  :  {step}/{_iter}]', end='')
        if step == _iter:
            print()


    def time(self, func,data,title=''):
        start = time.time()
        print(f'| {title} Start | ',time.strftime("%H:%M:%S"))
        result = func(data)
        end = time.time() - start
        print(f'| Execution time | {self.calTime(end)}')
        print()
        return result

    def calTime(self,T):
        M = int(T)//60
        S = int(T%60)
        H = M//60
        M = M%60
        ms = round(T%60)
        return f'{str(H).zfill(2)}:{str(M).zfill(2)}:{str(S).zfill(2)}.{ms}'

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


class Converter:
    def readFile(self,path):
        df = None
        extention = os.path.splitext(path)[-1]
        if extention=='.xlsx':
            df = pd.read_excel(path)
        if extention=='.csv':
            df = pd.read_csv(path,low_memory=False)
        if 'Unnamed: 0' in df.columns:
            df.drop(['Unnamed: 0'],axis=1,inplace=True)
        return df

    def saveFile(self,df,path):
        extention = os.path.splitext(path)[-1]
        if extention == '.xlsx':
            df.to_excel(path,index=False)
        if extention == '.csv':
            df.to_csv(path, index=False)

        return df

    def checkExtention(self,filename,extention):
        data = os.path.splitext(filename)[-1]
        if data == extention:
            return filename


    def convertExtention(self,filename,extention):
        file_name_list = os.path.splitext(filename)[:-1]
        filename = ''.join(file_name_list)
        filename = filename + extention
        return filename

    def fileExtention(self,dir_path,first='xlsx',second='csv'):
        file_list = os.listdir(dir_path)
        first_extention = '.'+first
        second_extention= '.' + second
        file_list = [self.checkExtention(x,first_extention) for x in file_list if self.checkExtention(x,first_extention) is not None]
        cv_file_list = list(map(lambda x: self.convertExtention(x,second_extention),file_list))
        set_file_list = zip(file_list,cv_file_list)
        for f,c in set_file_list:
            path = dir_path + f
            df = self.readFile(path)
            self.saveFile(df,dir_path+c)
