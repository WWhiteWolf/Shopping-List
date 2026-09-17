import os
import struct
import zlib

def write_png(path, rgb, w, h):
    r, g, b = rgb
    def chunk(tag, data):
        crc = zlib.crc32(tag + data) & 0xffffffff
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', crc)
    raw = b''.join(b'\x00' + bytes([r, g, b]) * w for _ in range(h))
    ihdr = struct.pack('>IIBBBBB', w, h, 8, 2, 0, 0, 0)
    png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b'')
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'wb') as f:
        f.write(png)

root = os.path.join(os.path.dirname(__file__), '..', 'assets', 'images')
os.makedirs(root, exist_ok=True)
teal = (0x1A, 0x6E, 0x8A)
write_png(os.path.join(root, 'icon.png'), teal, 1024, 1024)
write_png(os.path.join(root, 'splash-icon.png'), teal, 1024, 1024)
write_png(os.path.join(root, 'favicon.png'), teal, 48, 48)
write_png(os.path.join(root, 'android-icon-foreground.png'), teal, 1024, 1024)
write_png(os.path.join(root, 'android-icon-background.png'), (0xE6, 0xF4, 0xFE), 1024, 1024)
write_png(os.path.join(root, 'android-icon-monochrome.png'), (0x55, 0x55, 0x55), 1024, 1024)
print('icons written')
