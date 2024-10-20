# 24 Hour BYUI I-Hack 2024 Hackathon Project

## Project Overview
This project, **H-BACK**, helps you take back your HVAC by using a tally of devices connected to a wireless network, along with predefined information about the room (dimensions, insulation R value, desired temperatures, etc.) to determine how to adjust the HVAC settings in order to maintain the current temperature in the room.

It's a basic functioning prototype, not feature-complete.

## How It Works
H-BACK detects devices on a network by running an ARP request and subtracting a predefined number of known non-wireless hosts to determine occupancy.

## Deployment and Testing

### Prerequisites
- [ ] Python 3
- [ ] Apache
- [ ] Linux (tested on Ubuntu 22.04 LTS, but should work on any modern distro)
- [ ] net-tools
- [ ] Know your IP on the network you want to scan (use `ifconfig`)
- [ ] Know how many devices on that network you want to exclude from the calculations (use `nmap`, or check your router's connected device page)

### How to Deploy
1. Simply clone the repository to an Apache2 web server's directory (`/var/www/html` by default)
2. Start the Apache service:
    ```bash
    sudo systemctl start apache2.service
    ```
    (Replace `start` with `enable` if you want the service to persist across reboots)
3. Test the system by running the `update.py` script:
    ```bash
    python3 updater.py
    ```
    - The numbers on the GREEN indicators of the website should start gradually counting up.
    - If all goes well, your web server, Python 3, JavaScript, CSS, and HTML are all in the right place.
4. End the previous Python 3 script, then start the script that actually deals with the wireless devices:
    ```bash
    python3 updater2.py [desired-Network/submask]
    ```
    - You should see a string of numbers on your terminal. This is the current number of devices that have been detected MINUS the number of devices you want excluded from the count. The boxes on the web page should also reflect this.
