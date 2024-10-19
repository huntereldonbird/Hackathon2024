import time, subprocess;


def scan_network():
    result = subprocess.run(["sudo", "arp-scan", "192.168.0.1/24"], capture_output=True, text=True)
    devices = []
    for line in result.stdout.split("\n"):
        if "192.168." in line:
            parts = line.split()
            ip = parts[0]
            mac = parts[1]
            devices.append((ip))
    return devices





print(scan_network())


tmp = scan_network()

print(tmp.length())