import util
import matplotlib.pyplot as plt

class Visualize:

    def __init__(self):
        self.converter = util.Converter()
        self.df = None

    def dataLoad(self,path):
        self.df = self.converter.readFile(path)
        print(self.df)
        return self.df

    def plotChart(self,*args):
        plt.figure(figsize=(800,600))
        for i in args:
            plt.plot(i,label=i.name)
        plt.grid()
        plt.legend()

    def multiPlotChart(self,file_list):
        plt.figure(figsize=(800,600))
        for file in file_list:
            df= self.dataLoad(file)
            col = df.columns
            plt.plot(df[col])
        plt.show()


if __name__=="__main__":
    path = './model/history/'
    filename = 'proto_1_20210118_1741_2300_22029.csv'
    vi = Visualize()
    df = vi.dataLoad(path+filename)
    file_list = vi.converter.getFileList(path,'.csv',attach=True)
    vi.multiPlotChart(file_list)
    # vi.plotChart(df[df.columns[0]],df[df.columns[1]])

