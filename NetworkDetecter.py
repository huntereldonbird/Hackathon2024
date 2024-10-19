import time, subprocess;


# scans individual network
def scan_network():
    result = subprocess.run(["sudo", "arp-scan", "192.168.0.1/24"], capture_output=True, text=True)
    devices = []
    for line in result.stdout.split("\n"):
        if "192.168." in line:
            parts = line.split()
            ip = parts[0]
            mac = parts[1]
            devices.append(ip)
    return devices



# Get devices from spesific AP 
# Net is the 192.168.0.1/24 so if you want to use this function it is the same 
def Get_Devices_From_AP(net):
    devices = []
    result = subprocess.run(["sudo", "arp-scan", net], capture_output=True, text=True)

    for line in result.stdout.split("\n"):
        if(192.168) in line:
            parts = line.split()
            ip = parts[0]
            mac = parts[1]
            devices.append(ip)

    return devices


def get_count(net):
    net = Get_Devices_From_AP(net)
    count = len(net) - 2
    return count




