package com.practice.test;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FirstServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public void init(ServletConfig config) throws ServletException{
		System.out.println("init() �����");		
	}
	
	@Override
	public void service(ServletRequest arg0, ServletResponse arg1) throws ServletException, IOException{
		System.out.println("service() �����");
	}
	
}
