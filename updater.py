import time
import ac_test

ocupancy = 5 #get_people_data()
surface_area = 3000 # in sq ft
room_internal_temp = 68 #in F
room_external_temp = 68 #in f
desired_temp = 68 #in f




# Function to increment the contents in parentheses
def increment_contents():
    with open('labels.txt', 'r') as file:
        lines = file.readlines()

    for i, line in enumerate(lines):
        # Split the line into label and coordinates
        label, latitude, longitude, inside = line.strip().split(',')
        hvac_difference = ac_test.cacl_HVAC_maintain(ocupancy, surface_area, room_external_temp,desired_temp)
        # Remove any single quotes from the label
        label = label.replace("'", "")

        # Increment the contents in parentheses
        count = int(label.split('|')[1])
        count += 1
        print(f"success -> count{i} = {count}")
        # Update the label with the incremented count
        new_label = label.split('|')[0] + '|' + str(count)

        

        # Write the updated label and coordinates back to the file
        print(inside.split("|")[0])
        lines[i] = new_label + ',' + latitude + ',' + longitude + "," + inside.split("|")[0].split("=")[0] + "="+ str(hvac_difference) + '\n'

    with open('labels.txt', 'w') as file:
        file.writelines(lines)

# Run the increment function every 2 seconds
while True:
    increment_contents()
    time.sleep(2)