package com.practice.test;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

@WebServlet("/hello2")
public class FirstServlet extends HttpServlet {


	@Override
	public void init(ServletConfig config) throws ServletException{
		System.out.println("init() ½ÇÇàµÊ");		
	}
	
	@Override
	public void service(ServletRequest arg0, ServletResponse arg1) throws ServletException, IOException{
		System.out.println("service() ½ÇÇàµÊ");
	}
	
}
