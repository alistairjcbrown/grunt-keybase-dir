##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTqKPFAAoJEJEOHi8Q7zzzMbwIALv7hPVuDhjy6y5th8xHRbw6
BCLeIr+A8XdOGglXv//DUtW+F0NOVsQzKeSAzYR2NfAMWtECnAi9N+Ywj6ltdvgb
vkyTz/CHYsHG1UUh+1sB9Rk+7lPnXx5mgzc+hHa7ioCFd7iowOEyvyOM+Fpigwc+
Hz+xUvkjYVSdurQ1WrkVobc/MqfMspYneXe/JHPMlRreSP2jh0c2D/evX279aeS1
sN0pFB94lb0tC28q/JRvJqUwaQjLNBe5Sj3FcJI+0kXGNftHdsAadOpi77FkskV7
ZcwTMn8zzyTqMuk94Y7V1otwEpRU3VQnYrgmwbcUP20sEWeqZSm7ZIc89m1jc6g=
=Xpx6
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size  exec  file                     contents                                                        
            ./                                                                                       
31            .gitignore             bcad078364c85b9250791c8665594bfc72170ffc0740e7445ffc97235d69938f
191           .jshintrc              aaca126ed64caa8635be44f29205d73ac8dbcb1763b4c2b51ae501d472b8e689
1124          Gruntfile.js           7e1cd4ea1ea7ab3ce68ff5f079e01c9cf53e0f790a1796f40242e1c38af61bb7
1058          LICENSE-MIT            312c90009227f4ab5165dd8230be97a401b2b6a3265a6ad6c52d86799df467e5
2446          README.md              38d3a7594bede071400a6a59a037a9f7a0ed1cb4f56217f994caf6763351dfa0
1044          package.json           e4b11b19d41e65a49f5a65a82193b1f3ea9e293f188bdb0feb625ce3133f384a
              tasks/                                                                                 
7018            keybase_dir.js       a7d3a494b8eba9d02653e5efe0476030b614080f205c60d3e9f8c90cc5e8a265
              test/                                                                                  
                expected/                                                                            
18                custom_options     3e4702eec4c37cc9cb10f707fb0ea0ece586e451ee0309debbf478d13dd2b3d6
15                default_options    07f914397667cf8961f48b51dca59e2cd8edbb8efd2ebb1e2a660bb627ec189f
                fixtures/                                                                            
5                 123                7c8f5059290305cec8323d79521f0353c9ac308b60cb4c1976340d0ce4a121d5
7                 testing            e806a291cfc3e61f83b98d344ee57e3e8933cccece4fb45e1481f1f560e70eb1
1423            keybase_dir_test.js  26d304dda1bb320910b367f711f3f1a1b6b206d0462620a592d6a66551c54e03
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing