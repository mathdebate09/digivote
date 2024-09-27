import json

input_file = 'scraped.jsonl'
output_file = 'output3.txt'

with open(input_file, 'r', encoding='utf-8') as infile, open (output_file, 'w', encoding='utf-8') as outfile:
    for line in infile:

        try:
            json_obj = json.loads(line.strip())
            content = json_obj.get('content', '')
            if content:
                outfile.write(content + '\n')

        except json.JSONDecodeError:
            print(f"Skipping invalid JSON line: {line.strip()}")


print(f'content extracted to {output_file}')
