---
layout: butir
authors: [viridi]
title: excel function cell
pid: '0080'
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: literatures
tags: ["excel", "function", "cell", "address", "data", "index", "lookup", "value", "non-empty"]
date: 2021-07-20 06:05:00 +0700
permalink: /0080
src: https://github.com/dudung/butir/commits/main/_posts/0/08/2021-07-20-excel-function-cell.md
twitter_username: 6unpnp
nodes: ['0000']
---
Learning about Microsoft Excel functions related to cell in get cell value by address [[1](#r01)], find the last non-empty cell [[2](#r02)],

## index
Format `INDEX(array, row_num, [col_num])`, where `array` is something like `'Sheet'!A1:C4`, and `row_num` and `col_num` are simply a number. Following
```
=INDEX('MyData'!C3:F5, 2, 3)
```
will give the value of cell with address `E4` in the sheet with name `MyData`.

## lookup
Format `LOOKUP(lookup_value, lookup_vector, [result_vector])`, where `look_value` is the value to be found, but when it can not be found then it will match the next smallest value, `lookup_vector` is a vector with values to be examined, and `result_vector` is a vector with component to be displayed. Then
```
=LOOKUP(2, 1/('MyData'!K:K <> ""), 'MyData'!L:L)
```
will give

## notes
1. <a name="r01"></a>Steve Rynearson, "Get Cell Value by Address (Row & Column) – Excel & Google Sheets", Automate Excel, url <https://www.automateexcel.com/formulas/get-cell-value-by-address-row-column/> [20210720].
2. <a name="r02"></a>Dave Bruns, Lisa Bruns, "Get value of last non-empty cell", Exceljet, url <https://exceljet.net/formula/get-value-of-last-non-empty-cell> [20210720].

## &nbsp;
[introduction](0000) &bull;

