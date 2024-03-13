import os
import paramiko
import sys

def sftp_upload(local_path, remote_path, sftp):
    for root, dirs, files in os.walk(local_path):
        for file in files:
            local_file_path = os.path.join(root, file)
            remote_file_path = os.path.join(remote_path, os.path.relpath(local_file_path, local_path))
            
            # 创建远程目录
            remote_directory = os.path.dirname(remote_file_path)
            try:
                sftp.mkdir(remote_directory)
            except IOError:
                pass  # 目录已存在

            # 上传文件
            sftp.put(local_file_path, remote_file_path)
            print(f"Uploaded: {local_file_path} to {remote_file_path}")

def main():
    mode = 'dev'
    if len(sys.argv) > 1:
      mode = sys.argv[1] 
    

    hostname = "124.223.34.50"
    port = 22  # 默认的 SFTP 端口是 22
    username = "root"
    password = "ZBZshishuaige97"
    print(mode)
    if (mode == 'dev'):    
      local_path = "/Users/pro/GitHub/longdan/dist"
      remote_path = "/usr/local/bgtm/longdan"
    # else: 
    #   local_path = "/Users/pro/GitHub/qlin/dist"
    #   remote_path = "/usr/local/bgtm/prod"
    transport = paramiko.Transport((hostname, port))
    transport.connect(username=username, password=password)
    sftp = paramiko.SFTPClient.from_transport(transport)

    sftp_upload(local_path, remote_path, sftp)

    # 关闭连接
    sftp.close()
    transport.close()

if __name__ == "__main__":
    main()
