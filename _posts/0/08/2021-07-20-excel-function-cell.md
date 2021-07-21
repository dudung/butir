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
date: 2021-07-21 10:58:00 +0700
permalink: /0080
src: https://github.com/dudung/butir/commits/main/_posts/0/08/2021-07-20-excel-function-cell.md
twitter_username: 6unpnp
nodes: ['0000']
---
Learning about Microsoft Excel functions related to cell in get cell value by address [[1](#r01)], find the last non-empty cell [[2](#r02)], return a reference to a range [[3](#r03)], create cell address [[4](#r04)].

## index
Returns a value or reference of the cell at the intersection of a particular row and column,in a given range. Format `INDEX(array, row_num, [col_num])`, where `array` is something like `'Sheet'!A1:C4`, and `row_num` and `col_num` are simply a number. Following
```
=INDEX('MyData'!C3:F5, 2, 3)
```
will give the value of cell with address `E4` in the sheet with name `MyData`.

## lookup
Looks up a value either from a one-row or one-column range or from an array. Provided for backward compatibility. Format `LOOKUP(lookup_value, lookup_vector, [result_vector])`, where `look_value` is the value to be found, but when it can not be found then it will match the next smallest value, `lookup_vector` is a vector with values to be examined, and `result_vector` is a vector with component to be displayed. Then
```
=LOOKUP(2, 1/('MyData'!K:K <> ""), 'MyData'!L:L)
```
will give find the last non-empty row of colum `K:K` and use it to show the corrresponding row in column `L:L`. It is not necessary to use `'MyData'` when refering cell in the same sheet. The `('MyData'!K:K <> "")` will create array of `true` and `false` which will be treated as `1` and `0` when operated through `1/('MyData'!K:K <> "")`.

## indirect
Returns the reference specified by a text string. Format `=INDIRECT(ref_text, [a1])` will convert the `ref_text` into a reference with "A1" style if second argument is `true` or "R1C1" style if it is `false`.
```
=INDIRECT("B4")
```
will give value of cell with address `B4`.


## address
Creates a cell reference as text, given specified row and column numbers. Format `=ADDRESS(row_num, column_num, [abs_num], [a1], [sheet_text])`. Then following functions
```
=ADDRESS(2,3,1)
=ADDRESS(2,3,2)
=ADDRESS(2,3,3)
=ADDRESS(2,3,4)
```
will give
```
$C$2
C$2
$C2
C2
```
respectively, as cell references.

## notes
1. <a name="r01"></a>Steve Rynearson, "Get Cell Value by Address (Row & Column) – Excel & Google Sheets", Automate Excel, url <https://www.automateexcel.com/formulas/get-cell-value-by-address-row-column/> [20210720].
2. <a name="r02"></a>Dave Bruns, Lisa Bruns, "Get value of last non-empty cell", Exceljet, url <https://exceljet.net/formula/get-value-of-last-non-empty-cell> [20210720].
3. <a name="r03"></a>Debra Dalgleish, "Excel INDIRECT Function", Contextures, 9 Jul 2021, url <https://www.contextures.com/xlfunctions05.html> [20210721].
4. <a name="r04"></a>Svetlana Cheusheva, "Excel ADDRESS function with formula examples", Ablebits, 2 Mar 2021, url <https://www.ablebits.com/office-addins-blog/2019/02/20/excel-address-function/> [20210721].

## &nbsp;
[introduction](0000) &bull;

