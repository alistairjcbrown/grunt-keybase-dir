##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTqL0/AAoJEJEOHi8Q7zzz1owIAM0XGgrkl1yMeIHGiqGaHwa6
zNl7XAMy+RmQv1YsBmA4t4rYRhcaIRG7oL7+8aOuF2/5zLKCZqSJUDFEHF+iFFH7
9pZJU/J/Dnl/Lw8wadWfRONT5ovFUpTFYtSGSU+s7Mo8e6z3CpjLc1ofvOXs4Gvz
vrC2+ObUMkYZYFQxwVjWb7U1m/h4RVFXu49DR/yeXaI1lbLb6v7Y3yybhBs6E4Af
iPYj3AuMKWIDiGiqGF8ZORBfdcXGaKEGuGrUNX8WMZmpxAoBKN9zG44VETEPJz2t
z6xX+RY/AmGNfKwLPjDjfvA7S1O9pQClnYZN92N6zRnVw94OOFZqBNLqK2WPE2U=
=lo0L
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size  exec  file                           contents                                                        
            ./                                                                                             
31            .gitignore                   bcad078364c85b9250791c8665594bfc72170ffc0740e7445ffc97235d69938f
191           .jshintrc                    aaca126ed64caa8635be44f29205d73ac8dbcb1763b4c2b51ae501d472b8e689
1123          Gruntfile.js                 91861e8fc35f28679db83d5ed0df34c0b7f3f28b7814943f25efe3dc08cfb754
1058          LICENSE-MIT                  312c90009227f4ab5165dd8230be97a401b2b6a3265a6ad6c52d86799df467e5
2446          README.md                    38d3a7594bede071400a6a59a037a9f7a0ed1cb4f56217f994caf6763351dfa0
1044          package.json                 e4b11b19d41e65a49f5a65a82193b1f3ea9e293f188bdb0feb625ce3133f384a
              tasks/                                                                                       
8543            keybase_dir.js             3f459be22416fae38a054157a99d671becf24692e8690e1a1a737411f29f2088
              test/                                                                                        
                fixtures/                                                                                  
62                keybase-dir-sign.json    05bc48fe68c45f9a8c38559284ee2319668c054f5bea7281b076819b732af4b8
62                keybase-dir-verify.json  05bc48fe68c45f9a8c38559284ee2319668c054f5bea7281b076819b732af4b8
199               npm-ls-keybase.json      c1bd73950d01efa19b1f41822ef9d2b7cd2674c55300b54d056e118b0b6a04a0
7579            keybase_dir_test.js        9a0b06b97ab96a5d8c70155d4c5e6abb804988e5ada729228d958eac248e8491
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