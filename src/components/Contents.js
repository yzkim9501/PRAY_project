import React, { Component, Fragment } from 'react';
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const boardItems = [
  {
    src: require("../assets/img/captures/Board/1.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/Board/2.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/Board/3.PNG"),
    altText: "",
    caption: "",
    header: ""
  }
];
const caeItems = [
  {
    src: require("../assets/img/captures/BACCAE/1.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/BACCAE/2.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/BACCAE/3.PNG"),
    altText: "",
    caption: "",
    header: ""
  }
];
const mkItems = [
  {
    src: require("../assets/img/captures/BACMK/1.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/BACMK/2.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/BACMK/3.PNG"),
    altText: "",
    caption: "",
    header: ""
  }
];
const restMockItems = [
  {
    src: require("../assets/img/captures/RestMock/1.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/RestMock/2.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/RestMock/3.PNG"),
    altText: "",
    caption: "",
    header: ""
  }
];
const restHItems = [
  {
    src: require("../assets/img/captures/RestH/1.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/RestH/2.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/RestH/3.PNG"),
    altText: "",
    caption: "",
    header: ""
  }
];
class Contents extends Component {
    render() {
        return (
            <main className="my-5 py-5">
                <Container className="px-0">
                    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
                        <Col className="py-5 mb-5 py-md-0 mb-md-0">
                            <Fragment>
                                <div className="position-relative">
									<h4 className="display-4 mb-0">My Projects</h4>

                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
									<Row>
									  <Col className="mb-lg-auto" lg="5">
										<div className="rounded shadow-lg overflow-hidden transform-perspective-right">
										  <UncontrolledCarousel items={boardItems} />
										</div>
									  </Col>
									  <Col>
										<p className="lead">
										  처음으로 맡은 개발 작업은 서부발전에서 사용할 공지사항 게시판 기능을 만드는 것이였습니다. Spring과 dhtmlx를 사용하여 만들었으며, 관리자 레벨별로 관리할 수 있는 공지사항 게시글이 다르도록 설계하였습니다. 
										</p>
									  </Col>
									</Row>
                                    </article>

                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
									<Row>
									  <Col className="mb-lg-auto" lg="5">
										<div className="rounded shadow-lg overflow-hidden transform-perspective-right">
										  <UncontrolledCarousel items={caeItems} />
										</div>
									  </Col>
									  <Col>
										<p className="lead">
										  삼성에 납품하게 된 개인 프로젝트입니다. 수집하고 있는 온도값을 BACnet프로토콜 방식으로 broadcasting 하는 에이전트를 개발하였으며, 역시 프론트와 백 모두 진행하였습니다. 진행 도중, 수집값이 refresh되지 않았을 경우 이전의 값을 계속 주게 되어, 온도계가 고장났는데 계속 서버실이 18도로 표시되는 일이 있었습니다. 서버실의 온도는 계속 올라가는데 에어컨이 작동하지 않아 큰 일이 날 뻔한 사건이 있었고, 그 일을 통해 철저한 예외처리에 대한 중요성을 배웠습니다. 현재도 삼성 CAE에서 사용중인 에이전트입니다.
										</p>
									  </Col>
									</Row>
                                    </article>
                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
									<Row>
									  <Col className="mb-lg-auto" lg="5">
										<div className="rounded shadow-lg overflow-hidden transform-perspective-right">
										  <UncontrolledCarousel items={mkItems} />
										</div>
									  </Col>
									  <Col>
										<p className="lead">
										 삼성에서 사용하였던 BACnet 에이전트를 사내 프로그램의 기능으로 추가하기 위한 작업을 했습니다. 기존의 개별 프로그램과는 달리, 기개발되어있는 프로그램에 대해 합병 작업을 하는 것은 다른 개발을 하는 것과 마찬가지였습니다. 
										</p>
									  </Col>
									</Row>
                                    </article>
                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
									<Row>
									  <Col className="mb-lg-auto" lg="5">
										<div className="rounded shadow-lg overflow-hidden transform-perspective-right">
										  <UncontrolledCarousel items={restMockItems} />
										</div>
									  </Col>
									  <Col>
										<p className="lead">
										 사내에서 테스트로 사용할 일이 많아 REST API 목업 서버를 만들었습니다.  UI에서 url과 return data를 설정하고 저장하면 해당 url에 request를 보냈을 때 데이터가 return되도록 하는 구조로 간단히 설계 및 개발하였으며, 사내에서 유용하게 사용되었습니다.
										</p>
									  </Col>
									</Row>
                                    </article>
                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
									<Row>
									  <Col className="mb-lg-auto" lg="5">
										<div className="rounded shadow-lg overflow-hidden transform-perspective-right">
										  <UncontrolledCarousel items={restHItems} />
										</div>
									  </Col>
									  <Col>
										<p className="lead">
										 현재 화웨이에서 사용중인 REST API 서버입니다. 삼성에 납품된 것과 비슷하게, 서버실의 현재 상태값을 REST API로 전송하는 역할을 하는 에이전트를 기획 및 개발하였습니다. 기존에는 요청하면 바로바로 원래의 서버에 값을 물어보고 JSON 포맷으로 바꾸어서 전송해주는 방식이였는데, 화웨이에서 요청하는 데이터가 많아 과부하가 걸리는 일이 종종 생기게 되었고, 1분에 한번씩 모든 값을 쥐고 있다가 요청하였을 때 해당 값만 return하는 형태로 수정하게 되었습니다. 결과적으로 메모리 소모량은 늘었지만, 프로그램 안정성도 함께 늘었습니다. 네트워크가 끊어지는 일을 제외하고는 1년 넘는 시간동안 한번도 큰 문제없이 24시간 내내 가동중인 서비스입니다.
										</p>
									  </Col>
									</Row>
                                    </article>
                                </div>
                            </Fragment>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}
export default Contents;