package org.foolcoder.annotation;

import org.foolcoder.annotation.entity.*;
import org.foolcoder.common.Logger;

import java.util.HashMap;

public class AnnotationParser {

    private static HashMap map = new HashMap();

    public static HashMap parse(Class<?> dataClass) {
        Logger.log("AnnotationParser is parsing annotation");
        parseClassAnnotation(dataClass);
        parseFieldAnnotation(dataClass);
        return map;
    }

    public static void parseClassAnnotation(Class<?> dataClass) {
        Logger.log("Parsing class annotation");
        Data data = dataClass.getAnnotation(Data.class);
        map.put("data", data.value());
        BasicPath bp = dataClass.getAnnotation(BasicPath.class);
        map.put("basicPath", bp.value());
        Create create = dataClass.getAnnotation(Create.class);
        map.put("apiCreate", create.api());
        map.put("routerCreate", create.router());
        List list = dataClass.getAnnotation(List.class);
        map.put("apiList", list.api());
        map.put("routerList", list.router());
        Detail detail = dataClass.getAnnotation(Detail.class);
        map.put("apiDetail", detail.api());
        map.put("routerDetail", detail.router());
        Update update = dataClass.getAnnotation(Update.class);
        map.put("apiUpdate", update.api());
        map.put("routerUpdate", update.router());
        Logger.log("Class annotation end, the result is");
        map.put("map", new HashMap().put("name", "hahahahah"));
        System.out.println(map);
    }

    public static void parseFieldAnnotation(Class<?> dataClass) {
        Logger.log("Parsing field annotation");
//        Data data = dataClass.getAnnotation(Data.class);
//        map.put("data", data.value());
    }

}
