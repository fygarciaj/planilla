import type { Component } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <section>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Planilla de Cierre</h4>
                <div class="card-tools">
                  <button type="button" class="btn btn-sm">
                    <i class="fas fa-trash"></i>
                  </button>
                  <button type="button">
                    <i class="fa fa-address-card" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="row row-col-2">
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <div class="input-group">
                            <input type="text" name="turnIdSearch"
                              class="is-invalid" />
                            <div class="input-group-append">
                              <span class="input-group-text"><i
                                class="fas fa-plus-circle"></i>
                              </span>
                              <span class="input-group-text d-none"><i class="fas fa-spinner fa-spin-pulse"></i>
                              </span>
                            </div>
                          </div>
                          <small class="text-danger"></small>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm">
                        @if($turnsClosed)
                        <ul class="list-group list-group-horizontal-sm list-group-unbordered">
                          @foreach($turnsClosed as $turn)
                          <li class="list-group-item">
                            <button class="btn btn-sm btn-block btn-outline-success" title="{{ $turn->GranTotalDineroSumatoriaBruto }}">
                              <span class="badge badge-btn badge-danger"><i class="fas fa-minus"></i> </span>
                            </button>
                          </li>
                          @endforeach
                        </ul>
                        @endif
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm">
                        <div class="form-group">
                          <label class="form-label">Total Turn</label>
                          <div class="input-group">
                            <input type="text" class="form-control text-right" />
                            <div class="input-group-append">
                              <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <label class="form-label">Deposits</label>
                        <div class="input-group">
                          <input type="text" class="form-control text-right" />
                          <div class="input-group-append">
                            <span class="input-group-text"><i class="fas fa-plus"></i></span>
                          </div>
                        </div>
                        <ul class="list-group" >
                          @foreach($deposits as $depositItem)
                          <li class="list-group-item text-right" x-show="openDeposits" x-transition>
                            <button type="button" class="btn btn-flat btn-default btn-sm" >
                              <i class="fas fa-minus-circle fa-fw"></i>
                            </button>
                          </li>
                          @endforeach
                          <li class="list-group-item text-right">
                            Total: </li>
                        </ul>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <label class="form-label">Caja</label>
                        <div class="input-group">
                          <input type="text" class="form-control text-right" id="cash" />
                          <div class="input-group-append">
                            <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm">
                        <div class="form-group">
                          <label class="form-label">Creditos</label>
                          <div class="input-group">
                            <input type="text" class="form-control text-right" />
                            <div class="input-group-append">
                              <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm">
                        <div class="form-group">
                          <label class="form-label">Tarjetas</label>
                          <div class="input-group">
                            <input type="text" class="form-control text-right" />
                            <div class="input-group-append">
                              <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm">
                        <div class="form-group">
                          <label class="form-label">Bonos</label>
                          <div class="input-group">
                            <input type="text" class="form-control text-right" id="bonus" />
                            <div class="input-group-append">
                              <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm">
                        <div class="form-group">
                          <label class="form-label">Lubricantes</label>
                          <div class="input-group">
                            <input type="text" class="form-control text-right" id="lubricants" />
                            <div class="input-group-append">
                              <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm">
                        <div class="form-group">
                          <label class="form-label">Credito Lubricantes</label>
                          <div class="input-group">
                            <input type="text" class="form-control text-right" id="lubricantsCredit" />
                            <div class="input-group-append">
                              <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm">
                        <div class="form-group">
                          <label class="form-label">Lubricantes Anulado</label>
                          <div class="input-group">
                            <input type="text" class="form-control text-right" id="lubricantsNulled" />
                            <div class="input-group-append">
                              <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <label class="form-label">Expenses</label>
                        <div class="input-group">
                          <input type="text" class="form-control text-right" id="expense" />
                          <div class="input-group-append">
                            <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                          </div>
                        </div>
                        <ul class="list-group">
                          <li class="list-group-item"> <i class="fa fa-minus"></i>
                          </li>
                          <li class="list-group-item text-right">
                            <i class="fa fa-minus"></i></li>
                        </ul>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <label class="form-label">Total SpreadSheet</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                          </div>
                          <input type="numeric" class="form-control text-right" />
                          <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="row">
                            <h6 class="text-center text-black">Hoja de Cierre</h6>
                          </div>
                          <div class="row row-cols-2">
                            <div class="col">
                              <span>Depositos</span>
                            </div>
                            <div class="col">
                              <ul class="list-group text-right border-0 border-bottom">
                                <li class="list-group-item"></li>
                                <li class="list-group-item d-flex justify-content-between bg-gray"><span class="text-left">Total</span> <span class="text-right"></span> </li>
                              </ul>
                            </div>
                          </div>
                          <div class="row row-cols-2">
                            <div class="col">
                              <span>Caja</span>
                            </div>
                            <div class="col">
                              <ul class="list-group text-right border-0 border-bottom">
                                <li class="list-group-item d-flex justify-content-between bg-gray"><span class="text-left">...</span> <span class="text-right"></span> </li>
                              </ul>
                            </div>
                          </div>
                          <div class="row row-cols-2">
                            <div class="col">
                              <span>Total Hoja Cierre</span>
                            </div>
                            <div class="col">
                              <ul class="list-group text-right border-0 border-bottom">
                                <li class="list-group-item d-flex justify-content-between bg-gray">
                                  <span class="text-left"></span>
                                  <span class="text-right"></span> </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div >
                </div >
              </div >
            </div >
          </div >
        </div >
      </section >
    </div >
  );
};

export default App;
