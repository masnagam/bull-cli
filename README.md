# @masnagam/bull-cli

> CLI for [Bull]

## How to use

Before using `bull-cli`, you need to launch a Redis server:

```console
$ docker run -p 6379:6379 redis:alpine
```

Add a `video` job to a `transcode` queue:

```console
$ echo '{ "url": "http://example.com/video1.ts" }' | \
    bull add -q transcode -j video
1  # the identifier of the job
```

Process `video` jobs in the `transcode` queue:

```console
$ DEBUG=bull-cli:* bull process -q transcode -j video examples/success.js
  bull-cli:process:active 1 +0ms
  bull-cli:process:progress 1 100 +0ms
  bull-cli:process:completed 1 { result: 'OK' } +0ms
  bull-cli:process:drained  +0ms
```

## License

This software is distributed under the MIT license.  See [LICENSE] file for
details.

[Bull]: https://github.com/OptimalBits/bull
[LICENSE]: ./LICENSE
