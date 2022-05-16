# BkC Similar Discussions

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/block-cat/similar-discussions.svg)](https://packagist.org/packages/block-cat/similar-discussions)

**Extensia nu este publicată pe [Packagist](https://packagist.org/)!**

Aceasta este o extensie [Flarum](https://flarum.org/) care oferă posibilitatea ca, în lista de articole, de pe pagina unui articol selectate, să fie afișate doar articolele care au aceleași etichete ca și articolul curent. Articolele cu alte etichete nu sunt afișate în `DiscussionPane`.

## Compatibilitate

Această extensie este compatibilă cu versiunea `1.2.1` de [Flarum](https://flarum.org/).

## Instalare

Pentru instalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer require block-cat/similar-discussions *@dev
```

## Actualizare

Pentru actualizarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer update block-cat/similar-discussions
php flarum cache:clear
```

## Dezinstalare

Pentru dezinstalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer remove block-cat/similar-discussions
php flarum cache:clear
```

## Link-uri utile

- [Cod sursă pe GitHub](https://github.com/block-cat/similar-discussions)
- [Changelog](CHANGELOG.md)