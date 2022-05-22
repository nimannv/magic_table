class MTable {
    constructor(id) {
        this.id = id;
        this.columns = [];
        this.rows = [];
        this.tableTag= "<table>*</table>";
        this.theadTag= "<thead>*</thead>";
        this.tbodyTag= "<tbody>*</tbody>";
        this.trTag =  "<tr>*</tr>";
        this.thTag =  "<th>*</th>";
        this.tdTag =  "<td>*</td>";
    }

    print() {
        let target_div = document.getElementById(this.id);
        let table_content = this.tableTag;
        let tbody_content = this.tbodyTag;
        let thead_content = this.theadTag;
        
        // Make table header
        let inner_header_row = '';
        this.columns.forEach(function make_inner_header_row(column){
            let html_th_tag = this.thTag;
            html_th_tag = html_th_tag.replace("*", column);
            inner_header_row = inner_header_row + html_th_tag;
        }, this);
        let header_row  = this.trTag;
        header_row = header_row.replace("*",inner_header_row);
        thead_content = thead_content.replace("*", header_row);
        
        // Make table body
        let rows_contents = '';

        this.rows.forEach(function make_row(row){
            let row_tag = this.make_row(row);
            rows_contents = rows_contents + row_tag;
        }, this);
        console.log(rows_contents);

        tbody_content = tbody_content.replace("*", rows_contents);
        table_content = table_content.replace("*", thead_content + tbody_content);
        
        target_div.innerHTML = table_content;
    }

    make_row(row){
        let tr_tag = this.trTag;
        let inner_row = '';
        row.forEach(function make_inner_row(data){
            let td_tag = this.tdTag;
            td_tag = td_tag.replace("*", data);
            inner_row = inner_row + td_tag;
        }, this);
        tr_tag = tr_tag.replace("*", inner_row);
        return tr_tag;
    }

    add_row_top(row){
        this.rows.push(row);
        let row_tag = this.make_row(row);
        let current_contents = document.getElementById(this.id).getElementsByTagName( 'tbody' )[0].innerHTML;
        let next_contents = row_tag + current_contents;
        document.getElementById(this.id).getElementsByTagName( 'tbody' )[0].innerHTML = next_contents;
    }

    add_row_bottom(row){
        this.rows.push(row);
        let row_tag = this.make_row(row);
        let current_contents = document.getElementById(this.id).getElementsByTagName( 'tbody' )[0].innerHTML;
        let next_contents =  current_contents + row_tag;
        document.getElementById(this.id).getElementsByTagName( 'tbody' )[0].innerHTML = next_contents;
    }
}
  