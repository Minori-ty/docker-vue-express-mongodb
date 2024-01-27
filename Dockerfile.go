FROM golang:alpine as builder

WORKDIR /WWW/WWWROOT/
COPY ./go /WWW/WWWROOT/

RUN go env -w GOPROXY=http://goproxy.cn
RUN go build

FROM alpine

WORKDIR /WWW/WWWROOT/
COPY --from=builder /WWW/WWWROOT/server /WWW/WWWROOT/

EXPOSE 8080

CMD /WWW/WWWROOT/server