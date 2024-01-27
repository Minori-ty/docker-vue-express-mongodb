package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"server/common"
)

type Article struct {
	Title string `json:"title"`
	Age   int    `json:"age"`
}

func main() {
	r := gin.Default()
	r.Use(common.Cors())
	r.GET("/", func(c *gin.Context) {

		c.JSON(http.StatusOK, gin.H{
			"code": 2000,
			"msg":  "请求成功",
		})
	})
	r.GET("/user", func(c *gin.Context) {
		a := Article{
			Title: "标题",
			Age:   27,
		}
		c.JSON(200, a)
	})
	r.Run(":8080")
}
