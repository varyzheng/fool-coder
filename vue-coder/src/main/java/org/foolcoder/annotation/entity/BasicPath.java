package org.foolcoder.annotation.entity;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface BasicPath {
    String value() default "";
}
