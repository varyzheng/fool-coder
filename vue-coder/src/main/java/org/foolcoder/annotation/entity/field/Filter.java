package org.foolcoder.annotation.entity.field;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Filter {

    enum FilterType{
        SELECTOR,
        Date
    }

    FilterType type() default FilterType.SELECTOR;
    String remoteQueryPath() default "";
}


