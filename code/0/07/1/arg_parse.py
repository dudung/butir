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
