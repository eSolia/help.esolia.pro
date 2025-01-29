---
title: テキスト マークアップ スキーマ
description: テキストでマークアップするのに様々なマークアップスキーム
order: 600
category: サービス詳細
lang: ja
series: ja-skills
url: /skills/text-markup/
id: skillstextmarkup
tags:
  - スキル
  - テキスト
  - マークアップ
image: ''
draft: false
---
# 軽量マークアップ言語
ウェブサイトやユーザー フォーラムで使用される、シンプルな記号を使用してテキストを簡単にフォーマットするためのさまざまな軽量マークアップ言語があります。最も人気のあるのはおそらく Markdown ですが、下にスクロールして他のスキームもご覧ください。

## Markdown

- [Markdown](https://daringfireball.net/projects/markdown/syntax) - 2004年にジョン・グルーバー氏によって作成されたマークアップ スキーム。ブログやフォーラムの投稿を書くのに非常に人気があります。 

```markdown
# Heading 1
## Heading 2
**bold**
_italics_
[Wikipedia](https://ja.wikipedia.org/wiki// "Wikipedia")
```
 
## Wikipedia Wikitext / Wikicode

- [Wikitext](https://www.mediawiki.org/wiki/Wikitext/ja) - Wikipedia や関連サイトで使用される wiki マークアップ。

```
= Heading 1 =
== Heading 2 ==
'''bold'''
''italics''
[https://ja.wikipedia.org/wiki// Wikipedia]
```

## Creole

- [Creole](https://en.wikipedia.org/wiki/Creole_(markup))  - 「標準化」されたコアな Wikitext マークアップ

```
= Heading 1 =
== Heading 2 ==
**bold**
//italics//
[https://ja.wikipedia.org/wiki//|Wikipedia]
```

## AsciiDoc

- [AsciiDoc](https://en.wikipedia.org/wiki/AsciiDoc)

```
= Heading 1
== Heading 2
**bold**
__italics__
https://ja.wikipedia.org/wiki//[Wikipedia]
```

## Textile

- [Textile](https://en.wikipedia.org/wiki/Textile_(markup_language))

```
h1. Heading 1
h2. Heading 2
*bold*
_italics_
"Wikipedia":https://ja.wikipedia.org/wiki//
```

## reStructuredText (rst, reST)

- [reStructuredText (rst, reST)](https://en.wikipedia.org/wiki/ReStructuredText)

```
Heading 1
=========
Heading 2
---------
**bold**
*italics*
.. _Wikipedia: https://ja.wikipedia.org/wiki//
```

## BBCode

- [BBCode](https://en.wikipedia.org/wiki/BBCode) - bulletin board code

```
[heading]Heading 1[/heading]
[b]bold[b]
[i]italics[i]
[url=https://ja.wikipedia.org/wiki//]Wikipedia[/url] 
```

## Pendown

- [Pendown](https://github.com/senselogic/PENDOWN) - 色のある書類に使うスキーム

```
! Heading 1
!! Heading 2
**bold**
%%italics%%
@@https://ja.wikipedia.org/wiki// Wikipedia@@
```

> [!TIP]
> チャットやフォーラムでテキストを入力するときに、**太字** (`**bold**`) または _斜体_ (`_italics_`) を追加してみてはいかがでしょうか。大多数のシステム、特に Markdown は、このような軽量マークアップ言語をサポートしています。
