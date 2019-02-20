package org.foolcoder.annotation;

import org.foolcoder.common.Logger;

import java.util.HashMap;

public class DataMapper {

    private HashMap map;

    public HashMap getMap() {
        return map;
    }

    public void setMap(HashMap map) {
        this.map = map;
    }

    public DataMapper(Class<?> dataClass) {
        Logger.log("Initializing DataMapper");
        this.map = AnnotationParser.parse(dataClass);
    }
}
