//package com.Edit;
//
//import java.io.IOException;
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.util.HashMap;
//
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import com.google.gson.Gson;
//
///**
// * Servlet implementation class Update
// */
//@WebServlet("/Update")
//public class EditElement extends HttpServlet {
//private static final long serialVersionUID = 1L;
//       
//    /**
//     * @see HttpServlet#HttpServlet()
//     */
//    public EditElement() {
//        super();
//        // TODO Auto-generated constructor stub
//    }
//
///**
//* @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
//*/
//protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//// TODO Auto-generated method stub
//try {
//HashMap<Object, Object> Response = new HashMap<Object, Object>();
//int sl_no=Integer.parseInt(request.getParameter("Sl_no"));
//String invoice_currency = request.getParameter("Invoice_currency");
//String cust_payment_terms = request.getParameter("Cust_payment_terms");
//
//
//
//Class.forName("com.mysql.cj.jdbc.Driver");
//Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root");
//String sql_query="UPDATE winter_internship set invoice_currency= ? , cust_payment_terms= ? where sl_no= ? ";
//PreparedStatement preparedStatement = connection.prepareStatement(sql_query);
//
//preparedStatement.setInt(1,sl_no);
//preparedStatement.setString(2,invoice_currency);
//preparedStatement.setString(3,cust_payment_terms);
//
//
//if(preparedStatement.executeUpdate()>0){
//Response.put("update",true);
//}
//else {
//Response.put("update",false);
//}
//Gson gson = new Gson();
//response.setHeader("Access-Control-Allow-Origin","*");
//String Responsejson = gson.toJson(Response);
//response.getWriter().append(Responsejson);
//
//}catch(Exception e) {
//e.printStackTrace();
//}
//
//}
//
//}


//package com.addintern;
package com.Edit;
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


@WebServlet("/EditElement")
public class EditElement extends HttpServlet {
	private static final long serialVersionUID = 1L;
     
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			HashMap<Object, Object> Response = new HashMap<Object, Object>();
			int sl_no=Integer.parseInt(request.getParameter("sl_no"));
			String invoice_currency = request.getParameter("invoice_currency");
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			
			
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root");
			String sql_query="UPDATE winter_internship set invoice_currency= ? , cust_payment_terms= ? where sl_no= ? ";
			PreparedStatement preparedStatement = connection.prepareStatement(sql_query);
			
			preparedStatement.setString(1,invoice_currency);
			preparedStatement.setString(2,cust_payment_terms);
			preparedStatement.setInt(3,sl_no);			
					
			if(preparedStatement.executeUpdate()>0){
				Response.put("update",true);
			}
			else {
				Response.put("update",false);
			}
			Gson gson = new Gson();
			response.setHeader("Access-Control-Allow-Origin","*");
			String Responsejson = gson.toJson(Response);
			response.getWriter().append(Responsejson);
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	
	}

}