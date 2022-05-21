package com.Delete;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

@WebServlet("/Delete")
public class Delete extends HttpServlet {
   private static final long serialVersionUID = 1L;
       protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
          try {
                HashMap<Object, Object> Response = new HashMap<Object, Object>();
                int Delete = Integer.parseInt(request.getParameter("sl_no"));
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root");
                String sql_query="DELETE FROM winter_internship where sl_no = ?";
                PreparedStatement preparedStatement = connection.prepareStatement(sql_query);
                preparedStatement.setInt(1,Delete);

                if(preparedStatement.executeUpdate()>0) {
                   Response.put("update",true);

                }else {
                   Response.put("update",false);
                }

                Gson gson=new Gson();
                String ResponseJSON =gson.toJson(Response);
                response.setHeader("Access-Control-Allow-Origin","*");
                response.getWriter().append(ResponseJSON);
               }
              catch (Exception e) {
              e.printStackTrace();
           }

         }
}