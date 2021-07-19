---
layout: butir
authors: [viridi]
title: excel functions cell
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
tags: ["excel", "function", "cell", "address", "data", "index"]
date: 2021-07-20 05:26:00 +0700
permalink: /0080
src: https://github.com/dudung/butir/commits/main/_posts/0/08/2021-07-20-excel-function-cell.md
twitter_username: 6unpnp
nodes: ['0000']
---
Learning about Microsoft Excel functions related to cell and its address, such as `INDEX` [[1](#r01)]

## codes
File is `arg_parse.py`

```python
"""
	arg_parse.py
"""

import argparse

def parse_arguments():
	parser = argparse.ArgumentParser(description='Argument get parse via --commands')
	parser.add_argument("-x", metavar='value', required=True, help='first value to parse')
	parser.add_argument("-y", metavar='value', required=True, help='second value to parse')
	
	args = parser.parse_args()
	
	return args

def main():
	print('first value is ', args.x, sep='')
	print('second value is ', args.y, sep='')
	
if __name__ == '__main__':
	args = parse_arguments()
	main()
```

## results
Previous file can be executed as follows with the results

```
L:\home\butir\code\0\07\1>py arg_parse.py -h
usage: arg_parse.py [-h] -x value -y value

Argument get parse via --commands

optional arguments:
  -h, --help  show this help message and exit
  -x value    first value to parse
  -y value    second value to parse
```

to see the help,

```
L:\home\butir\code\0\07\1>py arg_parse.py
usage: arg_parse.py [-h] -x value -y value
arg_parse.py: error: the following arguments are required: -x, -y

L:\home\butir\code\0\07\1>py arg_parse.py -y
usage: arg_parse.py [-h] -x value -y value
arg_parse.py: error: argument -y: expected one argument

L:\home\butir\code\0\07\1>py arg_parse.py -y 2.5
usage: arg_parse.py [-h] -x value -y value
arg_parse.py: error: the following arguments are required: -x

L:\home\butir\code\0\07\1>py arg_parse.py -y 2.5 -x
usage: arg_parse.py [-h] -x value -y value
arg_parse.py: error: argument -x: expected one argument
```

to test whether all two arguments are provided, and

```
L:\home\butir\code\0\07\1>py arg_parse.py -y 2.5 -x -220
first value is -220
second value is 2.5
```

to get the intended result. See documentation [[1](#r01)] for further information.

## notes
1. <a name="r01"></a>

## &nbsp;
[introduction](0000) &bull;

