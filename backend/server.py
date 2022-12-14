from flask import Flask, request, redirect
import sqlite3 as sql

app = Flask(__name__)

@app.route('/api/addrec_club', methods=['POST'])
def addrec_club():
    if request.method=='POST':
        try:
            name = request.form['input-name']
            categories = request.form['same-category']
            num = request.form['same-member']
            email = request.form['input-email']
            phone = request.form['input-phone']

            with sql.connect('database.db') as con:
                cur = con.cursor()

                cur.execute("INSERT INTO club_reg (Clubname,Categories,n_member,email,number)VALUES(?,?,?,?,?)", (name, categories, num, email, phone))

                con.commit()
            
            return redirect("/browse")
        except:
            con.rollback()
        finally:
            con.close()

@app.route('/api/list_club')
def list():
    con = sql.connect("database.db")
    con.row_factory=sql.Row
    cur = con.cursor()
    cur.execute("SELECT * FROM club_reg")
    
    rows = cur.fetchall()
    data = []
    for row in rows:
        data.append([x for x in row])
    return data
  
if __name__ == '__main__':
    app.run(debug=True)
