package test.foolcoder.domainObject;

import org.foolcoder.annotation.DataMapper;
import org.foolcoder.annotation.entity.*;
import org.foolcoder.annotation.entity.field.*;

import java.util.Date;

@Data("driver")
@BasicPath("/basic/path")
@Create(api = "/v1/supply/driver/create", router = "driverCreate")
@List(api = "/v1/supply/driver/list", router = "driverList")
@Detail(api = "/v1/supply/driver/detail", router = "driverDetail")
@Update(api = "/v1/supply/driver/edit", router = "driverUpdate")
public class Driver {

    @Primary
    @DisplayInDetail(canEdit = false)
    public int id;

    @Column(title = "姓名")
    @DisplayInDetail
    @Filter(remoteQueryPath = "/v1/supply/driver/detail")
    public String name;

    @Key("city_code")
    @DisplayInDetail
    @Filter(remoteQueryPath = "/v1/supply/driver/detail")
    public int city;

    @Key("city_display")
    @Column(title = "城市")
    public String cityDisplay;

    @Key("create_at")
    @Column(title = "创建时间")
    @DisplayInDetail(canEdit = false)
    @Filter(type = Filter.FilterType.Date)
    public Date createAt;

    @Column(title = "操作", needRender = true)
    public String operation;


    public static void main(String[] args) {
        DataMapper dm = new DataMapper(Driver.class);
    }
}
