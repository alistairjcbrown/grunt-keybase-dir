##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTp12PAAoJEJEOHi8Q7zzzujcH/36LS7Mt5FrYJElejzBP5ffc
sgJwBte24PSFnMVuKmlK0VBl82h++ynzuK6SpbtNf+ako0hCFbPqysXOLnTsg57E
Eiw4EtZhgO9udWsOPbvyrmnn8CnrYYDJGoNtxOrYfY06ne7B/5ql0os6Yv6yVgFK
Ws7fI5BcFAHxsajyEuhiuMpFCUa+tE8btb6oeYO/7Rf2yVTH41ebTbRwOS9u0TbM
rXV7gsYJth7CyK/OzcP2RcCSuxszGKIWYxVVQCFer2faNydT7yvRtAIZQUqEPXUg
sj4rfnbrHH9g+XbwJ9g83HG+AjFpUY9YTwqSIbFHY7/Rir1iW9JQEAQzGwMYH2c=
=yCSU
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
1656          Gruntfile.js           bce45d81526149fc0bca1ed7a67abe6dd91bec17cf1ff68110407e850bdbd076
1058          LICENSE-MIT            312c90009227f4ab5165dd8230be97a401b2b6a3265a6ad6c52d86799df467e5
2446          README.md              38d3a7594bede071400a6a59a037a9f7a0ed1cb4f56217f994caf6763351dfa0
1068          package.json           e5d08758e4bf9a8fef32f7a30b7a52df437ee87d0114fef612e0d01a2a4a668c
              tasks/                                                                                 
2943            keybase_dir.js       03a085ee0aeec652a921408e0edde19b4c621fffc6f83a0f7be533618420198f
              test/                                                                                  
                expected/                                                                            
18                custom_options     3e4702eec4c37cc9cb10f707fb0ea0ece586e451ee0309debbf478d13dd2b3d6
15                default_options    07f914397667cf8961f48b51dca59e2cd8edbb8efd2ebb1e2a660bb627ec189f
                fixtures/                                                                            
5                 123                7c8f5059290305cec8323d79521f0353c9ac308b60cb4c1976340d0ce4a121d5
7                 testing            e806a291cfc3e61f83b98d344ee57e3e8933cccece4fb45e1481f1f560e70eb1
1351            keybase_dir_test.js  b7ade454e543274525631a5039954747b53eb394b7656deaab17c008367ea043
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