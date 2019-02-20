package org.foolcoder.common;

import java.text.DateFormat;
import java.util.Date;

public class Logger {

    public static void log(String operation) {
        log(operation, "");
    }

    public static void log(String operation, String content) {
        DateFormat df = DateFormat.getDateTimeInstance();
        String time = df.format(new Date());
        System.out.println(time + Constants.LOG_SPACE + operation + Constants.LOG_LINE + content);
    }

}
