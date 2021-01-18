package com.practice.test;

import java.io.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/netinfo")

public class NetInfoServlet extends HttpServlet{
	
	public void doGet(HttpServletRequest req,HttpServletResponse resp) throws ServletException,IOException{
		resp.setContentType("text/html;charset=EUC-KR");
		PrintWriter out = resp.getWriter();
		out.print("<html>");
		out.print("<head><title>Request 정보출력</title></head>");
		out.print("<body>");
		out.print("<h3>Network Request Info</h3>");
		out.print("Schema :"+req.getScheme()+"<br />");
		out.print("Server Name :"+req.getServerName()+"<br />");
		out.print("Server Address :"+req.getLocalAddr()+"<br />");
		out.print("Server Port :"+req.getServerPort()+"<br />");
		out.print("Client Address :"+req.getRemoteAddr()+"<br />");
		out.print("Client Host :"+req.getRemoteHost()+"<br />");
		out.print("Client Port :"+req.getRemotePort()+"<br />");
		out.print("</body></html>");
		out.close();
		
	}

}
