from PIL import Image
import os

source_path = "/Users/hoonlee/.gemini/antigravity/brain/e93f31dd-8577-4494-9228-07fe7b007104/uploaded_image_1765265430136.png"
dest_path = "public/images/pastor_profile.png"

try:
    img = Image.open(source_path)
    width, height = img.size
    
    # Assuming the photo is on the right side, roughly 40-50%
    # The image looks like a screenshot of a layout.
    # Let's crop the right half.
    
    left = width * 0.6  # Start from 60% width
    top = 0
    right = width
    bottom = height
    
    # Fine tuning based on visual inspection of the artifact might be hard blindly, 
    # but usually these layouts are split. 
    # Let's try to be a bit more smart or just conservative.
    # If I crop the right 40%, it should cover the person.
    
    cropped_img = img.crop((left, top, right, bottom))
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    
    cropped_img.save(dest_path)
    print(f"Successfully cropped and saved to {dest_path}")
    
except Exception as e:
    print(f"Error processing image: {e}")
