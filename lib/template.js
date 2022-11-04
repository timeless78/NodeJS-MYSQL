module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href='/author'>Author</a>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },authorSelect:function(authors, author_id){
    var tag = ``;
    var i = 0;
    while(i <authors.length) {
      var selected = '';
      if (authors[i].id === author_id) {
        selected = ' selected';
      }
      tag = tag + `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
      i++;
    }
    return `
      <select name="author">
        ${tag}
      </select>
    `;
  },authorTable:function(authors){
    var tags = `<table>`;
    var i = 0;
    while(i < authors.length){
        tags += 
        `
        <tr>
            <td>${authors[i].name}</td>
            <td>${authors[i].profile}</td>
            <td>update</td>
            <td>delete</td>
        </tr>
        `;
        i++;
    }
    tags += '</table>';
    return tags;
  }
}
