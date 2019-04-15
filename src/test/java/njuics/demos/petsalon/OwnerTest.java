package njuics.demos.petsalon;

import njuics.demos.petsalon.owner.Owner;
import njuics.demos.petsalon.owner.OwnerRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = App.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class OwnerTest {
    @Autowired
    private OwnerRepository ownerRepository;

    @Test
    public void test() throws Exception {

        // 创建10条记录
/*
        ownerRepository.save(new Owner("AAA", "xianlin", "nanjing", "123456"));
        ownerRepository.save(new Owner("BBB", "gulou", "nanjing", "234567"));
        ownerRepository.save(new Owner("CCC", "rugao", "nantong", "77777"));
        ownerRepository.save(new Owner("DDD", "haian", "nantong", "78788"));
        ownerRepository.save(new Owner("EEE", "qidong", "nantong", "89898"));
        ownerRepository.save(new Owner("FFF", "tiananmen", "beijing", "123456789"));
        ownerRepository.save(new Owner("GGG", "badaling", "beijing", "123456"));
        ownerRepository.save(new Owner("HHH", "chaoyang", "beijing", "123456"));
        ownerRepository.save(new Owner("III", "pudong", "shanghai", "123456"));
        ownerRepository.save(new Owner("JJJ", "puxi", "shanghai", "123456"));
*/
        // 测试findAll, 查询所有记录
        Assert.assertEquals("puxi", ownerRepository.findByName("JJJ").getAddress());

        // 测试findByName, 查询姓名为FFF的User
        Assert.assertEquals("123456789", ownerRepository.findByName("FFF").getTelephone());

        // 测试findByNameAndAge, 查询姓名为FFF并且年龄为60的User
        Assert.assertEquals("FFF", ownerRepository.findByNameAndCity("FFF", "beijing").getName());

        // 测试删除姓名为AAA的User
        //ownerRepository.delete(ownerRepository.findByName("AAA"));

        // 测试findAll, 查询所有记录, 验证上面的删除是否成功
        //Assert.assertEquals("123456", ownerRepository.findByName("AAA").getTelephone());
    }
}