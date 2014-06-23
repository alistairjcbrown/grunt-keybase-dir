##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTqLh2AAoJEJEOHi8Q7zzz1KoIAIHaCJFccsbc2+S5+/gaeKwQ
AMtN2+XeqnleiYTluvqP9SgR5z9YCeFcGPindVV8nHXAauOjiqKYndvHHZlpkerx
bCGVedM9eGMafNOTj0lhEmhAjP0KsXpd0zXFJxyPBoJzFN9XCrV0TbKLw11R9EYu
IcmFDsL4NaQHzaxz9w92aOtq3S/juwiYILmEsnYW//WkV0EgBBH43m49hefFcWoc
gDDJ/LF4S8bC6MAzfFmSNtXtGrwtmJ4Bv8rfrQjhAn6HECKKqYD2NblyJ244QULE
maD1e8gmKdc4ltRJrCDbElbByG/iXFEzlPF6P5oWmX/F6yLS4geNkui9kAH3CTk=
=hTiZ
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
8260            keybase_dir.js             886e6075589be90f8d3b46e3b5a12a3f4ec44e00e723a7134a0bff109bc126bc
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