

package com.SearchServ;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import ForFetching.pojo;
import com.SearchServ.SerachJdbc;

@WebServlet("/Search")
public class Search extends HttpServlet {
  private static final long serialVersionUID = 1L;
       
   
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    
    try {
//      HashMap<Object, Object> Response = new HashMap<Object, Object>();
      String Search = (request.getParameter("cust_number"));
      Search = Search+"%";
      System.out.println(Search);
      
      SerachJdbc fetchdata = new SerachJdbc();
      ArrayList<pojo> data = fetchdata.getData(Search);
      
      Gson gson=new Gson();
      String ResponseJSON =gson.toJson(data);
      response.setHeader("Access-Control-Allow-Origin","*");
      response.getWriter().append(ResponseJSON);
      System.out.println(ResponseJSON);
      
      }
    catch (Exception e) {
      e.printStackTrace();
    }
  
  }
}
