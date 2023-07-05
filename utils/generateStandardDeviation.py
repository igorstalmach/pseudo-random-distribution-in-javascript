import pandas as pd
import numpy as np
import matplotlib.pyplot as plt


def generateStandardDeviation(file: str):
    data = pd.read_csv(file)
    numbers = data['Random Numbers']

    # Calculate the standard deviation
    std_dev = np.std(numbers)

    # Print the standard deviation
    print('Standard Deviation:', std_dev)


# Choose a standard deviation to calulate:

# generateStandardDeviation('methods/1/result.csv')

# generateStandardDeviation('methods/2/2.1/result.csv')

# generateStandardDeviation('methods/3/3.1/result.csv')
