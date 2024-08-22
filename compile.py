import subprocess
import shutil
import os


def compile():

    # empty ./ builds
    shutil.rmtree('./build', ignore_errors=True)
    shutil.rmtree('./docs', ignore_errors=True)
    

    # compile the react code
    subprocess.call('cd src && npm run build', shell=True)
    print('React code compiled successfully!')

    shutil.copytree("./build", "./docs")

    # make a copy of the index.html as 404.html
    shutil.copyfile('./docs/index.html', './docs/404.html')

    # remove all .md files from the folders in the ./build/builds folder
    for root, dirs, files in os.walk('./docs/builds'):
        for file in files:
            if file.endswith('.md'):
                os.remove(os.path.join(root, file))

    # make a file called CNAME in the ./build folder with "michaelmanders.com" in it
    # with open('./docs/CNAME', 'w') as f:
    #     f.write('michaelmanders.com')

    print("Compile complete!")


if __name__ == '__main__':
    compile()