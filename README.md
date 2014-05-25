eve
===

StarTrek's Enterprise NCC-1701-D like voice control computer

requirements
------------

* Ubuntu 12.04 (with multiverse ppa)
* Julius & Julius VoxForge (`sudo apt-get install julius julius-voxforge`)
* Running julius as a module. See example directory.
* Festival (`sudo apt-get install festival`)
* SoX (`sudo apt-get install sox`)

```bash
sudo apt-get install julius julius-voxforge festival sox
```

setup
-----

1.  Clone the repo (or your fork).

2.  Compile the julius language files. You can adjust these files if you like.
    ```bash
    cd julius
    mkdfa example
    ```

3.  Run Julius as a module.
    ```bash
    julius -C julius.jconf -module
    ```

running
-------

```bash
npm start
```

