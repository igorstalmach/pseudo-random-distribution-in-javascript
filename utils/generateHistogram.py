import pandas as pd
import matplotlib.pyplot as plt


def generateHistogram(file: str, title: str, xlabel: str, ylabel: str):
    data = pd.read_csv(file)
    numbers = data['Random Numbers']

    plt.hist(numbers, bins=10, edgecolor='black')

    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.title(title)

    plt.show()


# Choose a histogram to plot:

# generateHistogram('methods/1/result.csv', 'Math.random() histogram', 'Random Numbers', 'Frequency')

# generateHistogram('methods/2/2.1/result.csv', 'RANDU histogram', 'Random Numbers', 'Frequency')

# generateHistogram('methods/3/3.1/result.csv', 'CBRNG histogram', 'Random Numbers', 'Frequency')
