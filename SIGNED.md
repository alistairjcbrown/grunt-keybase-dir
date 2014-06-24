##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTqekCAAoJEJEOHi8Q7zzzF1kIAJvcbSrMcM64Rus1OGJaqq4a
I1SCoWgQ2dxvCMgII6m4iQ08pE6YNFl1seIpO+d7sW1dkIKgOo6XPbJ0QN2INB0x
pjl0tD1av2J6U7GicYOsdbtTiQCrNBPCAj3fZCZnt1G2IuHx2PpA0KPSTjD+ZeG4
SVgTyHw6AvoZJ0BUhs0wwLVlcuNyh5ZKaDTGBN01EtrZeRBRCYPM0Oz+abhIbJSR
LheE9omttFr4IIB0UaqhpeCwU5ZDHOlQBPi9GgYNhjXc6mhMS2aeVNocXzA4SCqZ
KPMzKR89yDQ9qXvjBG/OIOvCuUu/D20gU+Tjs4KBhLyu4Z9Tnih+C8UfP3w6M/E=
=T0te
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size  exec  file                                   contents                                                        
            ./                                                                                                     
31            .gitignore                           bcad078364c85b9250791c8665594bfc72170ffc0740e7445ffc97235d69938f
191           .jshintrc                            aaca126ed64caa8635be44f29205d73ac8dbcb1763b4c2b51ae501d472b8e689
112           .travis.yml                          288a063794641ca8d320b6b015d1e20cbbab835f2a2186e41be808f885447602
1205          Gruntfile.js                         9f8dfe2c6e0c743d9e16b6a83a79414768a276b179824b365d5f96a3397e4ee8
1058          LICENSE-MIT                          312c90009227f4ab5165dd8230be97a401b2b6a3265a6ad6c52d86799df467e5
2672          README.md                            83110420a37bed0e8d0fb1c0fd4a03adfbc699d116d331d2a869f1b855757916
1116          package.json                         6cad0f0c4023278f09c51b7059018dbebd6986c75ee1da960c4283dfd7dcb79e
              tasks/                                                                                               
8770            keybase_dir.js                     a4671138e2957eca15fda0bfaa67c2805091f3157c37809d7689226d725c7033
              test/                                                                                                
                fixtures/                                                                                          
62                keybase-dir-sign.json            05bc48fe68c45f9a8c38559284ee2319668c054f5bea7281b076819b732af4b8
62                keybase-dir-verify.json          05bc48fe68c45f9a8c38559284ee2319668c054f5bea7281b076819b732af4b8
199               npm-ls-keybase-old-version.json  d8497b92d93fc3c40a3e9dbcdedd8482fe3b7bd8ca5417c2b9bd7474b46e11bd
199               npm-ls-keybase.json              c1bd73950d01efa19b1f41822ef9d2b7cd2674c55300b54d056e118b0b6a04a0
9002            keybase_dir_test.js                f91324bbe21b2be4c8a1ec770fa3818d034fd41425734ede3fb79dbeade0b634
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