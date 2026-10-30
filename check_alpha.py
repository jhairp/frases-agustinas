from PIL import Image
import numpy as np

img = Image.open('sample_transparent_cat.png')
arr = np.array(img)
alpha = arr[:, :, 3]
print(f"Alpha min: {alpha.min()}, max: {alpha.max()}")
print(f"Opaque pixels: {np.sum(alpha == 255)}, Transparent: {np.sum(alpha == 0)}, Semi: {np.sum((alpha > 0) & (alpha < 255))}")

