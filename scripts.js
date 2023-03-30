let updatePreview = () =>{
 
    document.getElementById("preview").innerHTML = marked(document.getElementById("editor").value, {breaks: true});
}


let firstLoad = () =>{
    document.getElementById("editor").value = `# H1
## H2
### H3
    
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
let multiLine = (code) =>{
    return "works!";
}
\`\`\`

Text can be **bold** _italic_ or **_both_**!

[This is a Link!](https://www.freecodecamp.org)

How about a list of lists:
- List 1
- List 2
 - List 2.1
- List 3
 - List 3.1
   - List 3.1.1

> And this is a Block Quote!

And an image:
![freeCodeCamp Logo](https://d33wubrfki0l68.cloudfront.net/b92ab3b21cc2504828d87929ebe023811b50021b/bb1ef/img/misuse-3.png)
`

    document.getElementById("preview").innerHTML = marked(document.getElementById("editor").value, {breaks: true});
}