# DivineLabs Ruffle

DivineLabs Ruffle is the pinned Flash compatibility runtime used by the
DivineLabs MusicWars client. It is a downstream fork of Ruffle and keeps the
upstream MIT/Apache-2.0 licensing and attribution intact.

## Distribution identity

- Product name: **DivineLabs Flash Runtime**
- Upstream: <https://github.com/ruffle-rs/ruffle>
- Client repository: <https://github.com/Ps1xo-On1kS/DivineLabs_MusicWars>
- Release channel for client builds: `divinelabs`

## Local changes

- DivineLabs-branded splash screen and loading palette.
- MusicWars compatibility fixes and regression tests are maintained on top of
  upstream rather than patching opaque release binaries.

Do not remove Ruffle copyright, license files, source notices, or the
`powered by Ruffle` attribution from distributed builds.
