```
<List
    rowKey="id"

    grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
    dataSource={['', ...list]}
    renderItem={ item =>
      item ? (
        <List.Item key={item.id}>
          <Card hoverable className={styles.card} actions={[<a>操作一</a>, <a>操作二</a>]}>
            <Card.Meta
              avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
              title={<a>{item.title}</a>}
              description={
                <Ellipsis className={styles.item} lines={3}>
                  {item.description}
                </Ellipsis>
              }
            />
          </Card>
        </List.Item>
      ) : (
        <List.Item>
          <Button type="dashed" className={styles.newButton}>
            <Icon type="plus" /> 新建产品
          </Button>
        </List.Item>
      )
    }
  />


```
