#!/bin/bash

echo "# Resume in yaml format."
echo ""
# List all files tracked by Git
git ls-files static/resume | while read -r file; do
    # Print the filename
    echo "## \`$file\`"
    echo ""
    # Print the content of the file in the specified format
    echo "\`\`\`yaml"
    cat "$file"
    echo "\`\`\`"
    echo ""
    echo ""
done
