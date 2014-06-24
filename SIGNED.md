##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTqeQfAAoJEJEOHi8Q7zzz4xcH/2WTM9bW23Mppp719WmMGkj0
II22plUsKxMEaGmpcumpoUet7wmWIAsqS9oqhkBqC8HwIDUDjVrrsBbtoJ73AnPq
Zt+yawtTXZ/JI+eTm+ERLDA3/WoeeLs9kBMwsTgvZ5Xan8i5jiAmNEScmw4o2oXk
9uGB2yPvpC6HukQp2mMBQtEOh5BFtTM90f/8Et/c8H4FI8pn/h64SNOtnxFxkYPh
E3VyJfE61+Vkn25+v3NaBonVFqyxy4xZYRbHcy1OYKXcnjlknUmcDjX5RNjvJ/PM
6Cvi5jUzf46Vfkl4mReDJ33ajJeKiradyhBY9O3rdTH8YdcgRcJQ/jgBsZ70j2w=
=gW0f
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
1123          Gruntfile.js                         91861e8fc35f28679db83d5ed0df34c0b7f3f28b7814943f25efe3dc08cfb754
1058          LICENSE-MIT                          312c90009227f4ab5165dd8230be97a401b2b6a3265a6ad6c52d86799df467e5
2971          README.md                            c9625e23ee5dfce03143625c333d3cb35cce6278b163a4bf6f3a19cdddb7bd80
1045          package.json                         a97d4fa97dafbc70e18aeea099f9639f56ffe78c961e710fc2e21b2adeed786a
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