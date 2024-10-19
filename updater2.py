import time
import NetworkDetecter

# Function to increment the contents in parentheses
def increment_contents():
    with open('labels.txt', 'r') as file:
        lines = file.readlines()

    for i, line in enumerate(lines):
        # Split the line into label and coordinates
        label, latitude, longitude = line.strip().split(',')

        # Remove any single quotes from the label
        label = label.replace("'", "")

        # Increment the contents in parentheses
        count = NetworkDetecter.get_number()
        
        
        print(f"success -> count{i} = {count}")
        # Update the label with the incremented count
        new_label = label.split('|')[0] + '|' + str()

        # Write the updated label and coordinates back to the file
        lines[i] = new_label + ',' + latitude + ',' + longitude + '\n'

    with open('labels.txt', 'w') as file:
        file.writelines(lines)

# Run the increment function every 2 seconds
while True:
    increment_contents()
    time.sleep(2)